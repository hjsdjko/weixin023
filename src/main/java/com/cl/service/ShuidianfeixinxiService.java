package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ShuidianfeixinxiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShuidianfeixinxiView;


/**
 * 水电费信息
 *
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface ShuidianfeixinxiService extends IService<ShuidianfeixinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ShuidianfeixinxiView> selectListView(Wrapper<ShuidianfeixinxiEntity> wrapper);
   	
   	ShuidianfeixinxiView selectView(@Param("ew") Wrapper<ShuidianfeixinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ShuidianfeixinxiEntity> wrapper);
   	

}

