package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.SheshibaoxiuDao;
import com.cl.entity.SheshibaoxiuEntity;
import com.cl.service.SheshibaoxiuService;
import com.cl.entity.view.SheshibaoxiuView;

@Service("sheshibaoxiuService")
public class SheshibaoxiuServiceImpl extends ServiceImpl<SheshibaoxiuDao, SheshibaoxiuEntity> implements SheshibaoxiuService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<SheshibaoxiuEntity> page = this.selectPage(
                new Query<SheshibaoxiuEntity>(params).getPage(),
                new EntityWrapper<SheshibaoxiuEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<SheshibaoxiuEntity> wrapper) {
		  Page<SheshibaoxiuView> page =new Query<SheshibaoxiuView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<SheshibaoxiuView> selectListView(Wrapper<SheshibaoxiuEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public SheshibaoxiuView selectView(Wrapper<SheshibaoxiuEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
