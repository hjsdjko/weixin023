package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.WuyefeixinxiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.WuyefeixinxiView;


/**
 * 物业费信息
 *
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface WuyefeixinxiService extends IService<WuyefeixinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<WuyefeixinxiView> selectListView(Wrapper<WuyefeixinxiEntity> wrapper);
   	
   	WuyefeixinxiView selectView(@Param("ew") Wrapper<WuyefeixinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<WuyefeixinxiEntity> wrapper);
   	

}

