package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ShequxiaoxiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShequxiaoxiView;


/**
 * 社区消息
 *
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface ShequxiaoxiService extends IService<ShequxiaoxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ShequxiaoxiView> selectListView(Wrapper<ShequxiaoxiEntity> wrapper);
   	
   	ShequxiaoxiView selectView(@Param("ew") Wrapper<ShequxiaoxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ShequxiaoxiEntity> wrapper);
   	

}

